const seriesDurations = [
  {
    title: 'Game of thrones',
    days: 3,
    hours: 1,
    minutes: 0,  
  },
  {
    title: 'Sopranos',
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: 'The Wire',
    days: 2,
    hours: 12,
    minutes: 0,
  }
]

function calculateTotalTimeOfSeries(series) {
  
  const myLifeSpan = 80 * 365 * 24 * 60;
  let totalSeriesTime = 0;
  if(series === undefined ) {
    return "Series is undefined";
  }
  else {
    for(let i=0; i<series.length; i++) {
      const totalHours = (series[i].days * 24) + series[i].hours;
      const totalMinutes = (totalHours * 60) + series[i].minutes;
      let seriesTime = (totalMinutes / myLifeSpan) * 100;
      totalSeriesTime += seriesTime;

      console.log(series[i].title+ " took " + seriesTime.toFixed(3) + "% of my life.");
    }
  }
  return "In total that is " + totalSeriesTime.toFixed(2) + "% of my life.";
}

console.log(calculateTotalTimeOfSeries(seriesDurations));