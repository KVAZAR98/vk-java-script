// Отправка события
vkBridge.send('VKWebAppGetEmail')
  .then((data) => {
    if (data.result) {
      // Обработка события в случае успеха
      console.log(data.email);
    } else {
      // Ошибка
    }
  })
  .catch((error) => {
    // Обработка события в случае ошибки
    console.log(error);
  });
