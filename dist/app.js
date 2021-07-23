"use strict";var _service = require('./lib/service');


const getUserData = async (number) => {
  const data = await _service.getData.call(void 0, number);
  console.log(data);
};

getUserData(1);