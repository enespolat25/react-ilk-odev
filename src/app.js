import { getData } from './lib/service';


const getUserData = async (number) => {
  const data = await getData(number);
  console.log(data);
};

getUserData(1);