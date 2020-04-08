const data = [
    {
      principal: 2500,
      time: 1.8
    },
    {
      principal: 1000,
      time: 5
    },
    {
      principal: 3000,
      time: 1
    },
    {
      principal: 2000,
      time: 3
    }
   ]
   
   const gold = (principal, time, rate, interest) => {
     return {
       principal, time, rate, interest
     }
   }
   
   const interestCalculator = (arr) => {
     const interestData = [];
     
     arr.map(kp => {
       const prc = kp.principal;
       const time = kp.time;
       if (prc >= 2500 && time > 1 && time < 3) {
         const interest = (prc * time * 3) / 100;
         interestData.push(gold(prc, time, 3, interest))
       } else if (prc >= 2500 && time >= 3) {
         const interest = (prc * time * 4) / 100;
         interestData.push(gold(prc, time, 4, interest))
       } else if (prc < 2500 || time <= 1) {
         const interest = (prc * time * 2) / 100;
         interestData.push(gold(prc, time, 2, interest))
       } else {
         const interest = (prc * time * 1) / 100;
         interestData.push(gold(prc, time, 1, interest))
       }
     })
     
     return interestData;
   }
   
   console.log(interestCalculator(data));