const getSomething = (isSuccess) => new Promise((resolve, reject) => {
  if (isSuccess) {
    resolve({data: 'Succeed'});
  } else {
    reject({data: 'Failed'});
  }
});

getSomething(false)
  .then((data) => console.log({data}))
  .catch((data) => console.log({data}));
