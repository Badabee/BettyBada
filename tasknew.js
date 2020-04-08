const data = [
    {
    Principal: 2500,
    time: 1.8
    },
    {
    Principal: 1000,
    time: 5
    },
    {
    Principal: 3000,
    time: 1
    },
    {
    Principal: 2000,
    time: 3
    }
    ]
    
    const interestCalculator = (data) => {
    
    for (x in data){
    if ((data[x].Principal >= 2500) && (data[x].time < 3)){
    data[x].rate = 3;
    }
    else if ((data[x].Principal >= 2500) && (data[x].time >= 3)){
    data[x].rate = 4
    }
    else if
    ((data[x].Principal < 2500) || (data[x].time <= 1)){
    data[x].rate = 2
    }
    else{
    data[x].rate = 1
    }
    }
    const interestData = data.map(el =>{
        return el.interest = (el.Principal * el.time * el.rate) / 100
      })

     console.log(data)
    }
    interestCalculator(data);