import React from "react";
import Grid from "/Users/caliservices/Dropbox/Niyo Software Development Bootcamp/Niyo Software Dev course/Assignment 5 - React web design/niyo-website/src/component-grid/Grid.js";
import icon1 from "/Users/caliservices/Dropbox/Niyo Software Development Bootcamp/Niyo Software Dev course/Assignment 5 - React web design/niyo-website/src/images/icon1.png";
import icon2 from "/Users/caliservices/Dropbox/Niyo Software Development Bootcamp/Niyo Software Dev course/Assignment 5 - React web design/niyo-website/src/images/icon2.png";
import icon3 from "/Users/caliservices/Dropbox/Niyo Software Development Bootcamp/Niyo Software Dev course/Assignment 5 - React web design/niyo-website/src/images/icon3.png";
import icon4 from "/Users/caliservices/Dropbox/Niyo Software Development Bootcamp/Niyo Software Dev course/Assignment 5 - React web design/niyo-website/src/images/icon4.png";
import icon5 from "/Users/caliservices/Dropbox/Niyo Software Development Bootcamp/Niyo Software Dev course/Assignment 5 - React web design/niyo-website/src/images/icon5.png";
import icon6 from "/Users/caliservices/Dropbox/Niyo Software Development Bootcamp/Niyo Software Dev course/Assignment 5 - React web design/niyo-website/src/images/icon6.png";
import icon7 from "/Users/caliservices/Dropbox/Niyo Software Development Bootcamp/Niyo Software Dev course/Assignment 5 - React web design/niyo-website/src/images/icon7.png";
import icon8 from "/Users/caliservices/Dropbox/Niyo Software Development Bootcamp/Niyo Software Dev course/Assignment 5 - React web design/niyo-website/src/images/icon8.png";
import icon9 from "/Users/caliservices/Dropbox/Niyo Software Development Bootcamp/Niyo Software Dev course/Assignment 5 - React web design/niyo-website/src/images/icon9.png";
import icon10 from "/Users/caliservices/Dropbox/Niyo Software Development Bootcamp/Niyo Software Dev course/Assignment 5 - React web design/niyo-website/src/images/icon10.png";
import icon11 from "/Users/caliservices/Dropbox/Niyo Software Development Bootcamp/Niyo Software Dev course/Assignment 5 - React web design/niyo-website/src/images/icon11.png";


const Data = () => {
    const gridData = [
        {
            id: 1,
            image: icon1,
            title: "Sponsorships",
            description: "This means that you will never have to worry about paying a penny to learn a new skill. Our partners have ensured that you are able to upskill at the comfort of your home with no cost to you.",
          },
        
          {
            id: 2,
            image: icon2,
            title: "Free Counselling Sessions",
            description: "Every student has access to a number of wellbeing and counselling sessions with our partners at frontline therapists.",
          },
        
          {
            id: 3,
            image: icon3,
            title: "Childcare Support",
            description: "Every mum on our bootcamps is eligible to apply to receive up to £250 in childcare vouchers as a way of supporting you whilst learning.",
          },
        
          {
            id: 4,
            image: icon4,
            title: "4.75 / 5 Average Reviews",
            description: "We are focused on ensuring every student has the best experience our bootcamps have to offer.",
          },
        
          {
            id: 5,
            image: icon5,
            title: "75% Employment Rate",
            description: "This is from our 2020 outcomes. Our students have been able to go on to work at some awesome organisations from junior to senior levels.",
          },
        
          {
            id: 6,
            image: icon6,
            title: "560 people Upskilled",
            description: "Since 2020, we have upskilled 560 to start a career in tech and progress into more senior roles in tech in companies like Northrop Grumman, Zappi, KPMG and many more.",
          },
        
          {
            id: 7,
            image: icon7,
            title: "Dedicated Career Support from Day One",
            description: "You will have Hannah, our employability and career coach here to support you from your first day. She will help you with your LinkedIn, CV and also interview coaching.",
          },
        
          {
            id: 8,
            image: icon8,
            title: "Exclusive Access to Open Roles to All Our Hiring Partners ",
            description: "Exclusive access to open roles to all our hiring partners.",
          },
        
          {
            id: 9,
            image: icon9,
            title: "Cool Rewards",
            description: "We like to reward our students during really important milestones. All our rewards come with an element of surprise.",
          },
        
          {
            id: 10,
            image: icon10,
            title: "Empowerment Evenings and Events",
            description: "Free access to empowerment workshops and events by men and women who are excelling in their careers and businesses.",
          },
        
          {
            id: 11,
            image: icon11,
            title: "7000+ Community of talents ",
            description: "We’ve grown an organic community of 7000 people who are passionate about tech and the intersections of it with other industries.",
          },
        ];

        return (
            <div>
                <Grid data={gridData} />
            </div>
          );
        };
        

        export default Data;