/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  // Your code here
  const children = 0 <= age && age<= 12;
  const Teens = 12 < age && age<= 17;
  const Adults = 17 < age && age<= 59;
  const Seniors = age >= 60;

  if (!isWeekend) {
      if (children) {
          console.log("Ticket price is", 8);
      }

      else if (Teens) {
          console.log("Ticket price is", 12);
      }

      else if (Adults) {
          console.log("Ticket price is", 15);
      }

      else if (Seniors) {
          console.log("Ticket price is", 10);
      }

      else if(age <0){
        console.log(-1)
      }

  }

  else if( isWeekend) {
      if (children) {
          console.log("Ticket price is $",(8+3));
      }

      else if (Teens) {
          console.log("Ticket price is $", 12+3);
      }

      else if (Adults) {
          console.log("Ticket price is", 3+15);
      }

      else if (Seniors) {
          console.log("Ticket price is", 3+10);
      }

      else if(age <0){
        console.log(-1)
      }

  }

}

getTicketPrice(30, true);
getTicketPrice(14, false);
getTicketPrice(-1,false);
