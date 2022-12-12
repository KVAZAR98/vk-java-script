src="https://unpkg.com/@vkontakte/vk-bridge/dist/browser.min.js"
vkBridge.send('VKWebAppInit');
vkBridge.send('VKWebAppGetEmail')
  .then((data) => { 
    if (data.email) {
      // Доступ к электронной почте получен
    }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });


window.alert("Ghb");
