let start = "1:20 PM";
let end = "10:30 AM";

// convert into unix timestamp by adding a date
let startDate = new Date('01.01.1970 '+start).getTime() / 1000;
let endDate = null;

if (start.includes("PM") && end.includes("AM")) {
  endDate = new Date('01.02.1970 '+end).getTime() / 1000; // the end time is the "next" day
} else {
  endDate = new Date('01.01.1970 '+end).getTime() / 1000; // same day
}

// time diff in minutes
console.log(Math.abs(endDate - startDate) / 60);
