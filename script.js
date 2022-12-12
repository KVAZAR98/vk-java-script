bridge.send('VKWebAppGetEmail')
  .then((data) => { 
    if (data.email) {
      // Доступ к электронной почте получен
    }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });


window.alert(a);
