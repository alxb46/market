import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';

const FaceBlur = ({ imageUrl }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const loadModels = async () => {
            try {
                // Загружаем модели Face-API.js
                await Promise.all([
                    faceapi.nets.ssdMobilenetv1.loadFromUri('/models'), // Модель для обнаружения лиц
                    faceapi.nets.faceLandmark68Net.loadFromUri('/models'), // Модель для распознавания черт лица
                    faceapi.nets.faceRecognitionNet.loadFromUri('/models'), // Модель для распознавания лиц
                ]);
                console.log('Модели успешно загружены.');
            } catch (error) {
                console.error('Ошибка при загрузке моделей:', error);
            }
        };

        const processImage = async () => {
            const img = document.getElementById('inputImage');
            const canvas = canvasRef.current;

            if (!img || !canvas) {
                console.error('Изображение или canvas отсутствуют.');
                return;
            }

            // Убедимся, что модели загружены
            if (!faceapi.nets.ssdMobilenetv1.isLoaded) {
                console.error('Модель SsdMobilenetv1 не загружена.');
                return;
            }

            try {
                // Синхронизируем размеры canvas с изображением
                const displaySize = { width: img.naturalWidth, height: img.naturalHeight };
                faceapi.matchDimensions(canvas, displaySize);

                // Обнаруживаем лица
                const detections = await faceapi.detectAllFaces(img);

                if (!detections.length) {
                    console.log('Лица не обнаружены.');
                    return;
                }

                console.log(`Обнаружено лиц: ${detections.length}`);

                // Настройка канваса
                const context = canvas.getContext('2d');
                canvas.width = displaySize.width;
                canvas.height = displaySize.height;

                // Рисуем изображение
                context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);

                // Наносим размытие на обнаруженные лица
                detections.forEach((detection) => {
                    const { x, y, width, height } = detection.box;
                    const faceImageData = context.getImageData(x, y, width, height);
                    const blurredFace = applyBlur(faceImageData, 10);
                    context.putImageData(blurredFace, x, y);
                });
            } catch (error) {
                console.error('Ошибка при обработке изображения:', error);
            }
        };

        const applyBlur = (imageData, blurRadius) => {
            const canvas = document.createElement('canvas');
            canvas.width = imageData.width;
            canvas.height = imageData.height;

            const ctx = canvas.getContext('2d');
            ctx.putImageData(imageData, 0, 0);

            // Применяем размытие
            ctx.filter = `blur(${blurRadius}px)`;
            ctx.drawImage(canvas, 0, 0);

            return ctx.getImageData(0, 0, canvas.width, canvas.height);
        };

        const startProcessing = async () => {
            await loadModels(); // Загружаем модели
            await processImage(); // Обрабатываем изображение
        };

        startProcessing();
    }, [imageUrl]);

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            {/* Скрытое изображение */}
            <img
                id="inputImage"
                src={imageUrl}
                alt="Input"
                onLoad={() => console.log('Изображение загружено.')}
                style={{ display: 'none' }}
            />
            {/* Канвас для результата */}
            <canvas ref={canvasRef} style={{ maxWidth: '100%' }} />
        </div>
    );
};

export default FaceBlur;
