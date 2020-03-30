export const calculate = ({
  daysLeft,
  currentAmount,
  itemSize,
  usagePct
}) => {
  console.log('calcualting:')
  console.log({
    daysLeft,
    currentAmount,
    itemSize,
    usagePct
  });
  // return api.get(...)
  // temp return
  return new Promise((res, rej) => {
    res({
      amount: 10,
      days: 2,
    });
  });
};
