var mongoose =require("mongoose");
var Comment = require("./models/comment");
var Campground = require("./models/campground");
//var Comment = require("./models/comment");

var data= [
    {
        name: "To Kill a Mockingbird",
        image: "https://images-na.ssl-images-amazon.com/images/I/71FxgtFKcQL.jpg",
        description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic. Compassionate, dramatic, and deeply moving, To Kill A Mockingbird takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature."
    },
    {
        name: "Siddhartha",
        image: "https://jamesclear.com/wp-content/uploads/2017/03/Siddhartha-by-Herman-Hesse-455x700.jpg",
        description: "Though set in a place and time far removed from the Germany of 1922, the year of the book’s debut, the novel is infused with the sensibilities of Hermann Hesse’s time, synthesizing disparate philosophies–Eastern religions, Jungian archetypes, Western individualism–into a unique vision of life as expressed through one man’s search for meaning. It is the story of the quest of Siddhartha, a wealthy Indian Brahmin who casts off a life of privilege and comfort to seek spiritual fulfillment and wisdom. On his journey, Siddhartha encounters wandering ascetics, Buddhist monks, and successful merchants, as well as a courtesan named Kamala and a simple ferryman who has attained enlightenment. Traveling among these people and experiencing life’s vital passages–love, work, friendship, and fatherhood–Siddhartha discovers that true knowledge is guided from within."
    },
    {
        name: "A Thousand Splendid Suns",
        image: "https://jamesclear.com/wp-content/uploads/2017/04/A-Thousand-Splendid-Suns-by-Khaled-Hosseini-456x700.gif",
        description: "After 103 weeks on the New York Times bestseller list and with four million copies of The Kite Runner shipped, Khaled Hosseini returns with a beautiful, riveting, and haunting novel that confirms his place as one of the most important literary writers today. Born a generation apart and with very different ideas about love and family, Mariam and Laila are two women brought jarringly together by war, by loss and by fate. As they endure the ever escalating dangers around them-in their home as well as in the streets of Kabul-they come to form a bond that makes them both sisters and mother-daughter to each other, and that will ultimately alter the course not just of their own lives but of the next generation. With heart-wrenching power and suspense, Hosseini shows how a woman's love for her family can move her to shocking and heroic acts of self-sacrifice, and that in the end it is love, or even the memory of love, that is often the key to survival. A stunning accomplishment, A Thousand Splendid Suns is a haunting, heartbreaking, compelling story of an unforgiving time, an unlikely friendship, and an indestructible love."
    }
    
]

function seedDB(){
    Campground.remove({},function(err){
        // if(err)
        //     console.log(err);
        // else{
        //     console.log("removed all campgrounds");
        //     data.forEach(function(seed){
        //         Campground.create(seed,function(err,campground){
        //             if(err)
        //                 console.log(err);
        //             else
        //             {
        //                 console.log("created campground");
        //                 Comment.create(
        //                     {
        //                         text: "These all are very great books",
        //                         author: "Anonymous"
        //                     },function(err,comment){
        //                         if(err)
        //                             console.log(err);
        //                         else
        //                         {
        //                             console.log("comment created");
        //                             campground.comments.push(comment);
        //                             campground.save();
        //                             console.log("comment added to campground");
        //                         }
        //                     }
        //                 )
        //             }
        //         });
        //     });
        // }
    });
}

module.exports= seedDB;