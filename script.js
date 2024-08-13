// document.getElementsByTagName("ul")[0].firstElementChild.style.color = "red";
// -------------------------------------------------------------------------------------------------------------->

// document.getElementsByTagName("ul")[0].firstElementChild.style.color = "green";
// document.getElementsByTagName("ul")[0].lastElementChild.style.color = "green";
// -------------------------------------------------------------------------------------------------------------->

// Array.from(document.getElementsByTagName("li")).forEach((element) =>{
//     element.style.background = "cyan";
// })
// -------------------------------------------------------------------------------------------------------------->

let joke_arr = [`What's the best thing about Switzerland? The flag is a big plus.`,

    `I went to the aquarium this weekend, but I didn’t stay long. There’s something fishy about that place.`,

    `I found a lion in my closet the other day! When I asked what it was doing there, it said “Narnia business.”`,

    `What's a cat's favorite instrument? Purr-cussion.`,

    `Why did the snail paint a giant S on his car? So when he drove by, people could say: “Look at that S car go!”`,

    `What do you call a happy cowboy? A jolly rancher.`,

    `What subject do cats like best in school? Hiss-tory.`,

    `Humpty Dumpty had a great fall. He said his summer was pretty good too.`,

    `My boss said “dress for the job you want, not for the job you have.” So I went in as Batman.`,

    `How do you make holy water? You boil the hell out of it.`,

    `Justice is a dish best served cold. Otherwise, it's just water.`,

    `Why should you never throw grandpa's false teeth at a vehicle? You might denture car.`,

    `Why are Christmas trees bad at knitting? They always drop their needles.`,

    `What did the lunch box say to the refrigerator? Don't hate me because I'm a little cooler.`,

    `I can always tell when someone is lying. I can tell when they're standing too.`,

    `Some people pick their nose, but I was born with mine.`]

let joke = document.getElementsByClassName("joke")[0];
let btn = document.querySelector("button")



let index = Math.floor(Math.random() * joke_arr.length);
btn.addEventListener("click", function(){
    joke.innerHTML = joke_arr[index]
})



