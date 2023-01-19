let pics = [
  "https://media-api.xogrp.com/images/bb8aa8d5-9095-4986-94a8-793e1512d0c2~rt_auto-cr_0.0.2500.1666-rs_2500.1666?ordering=explicit",
  "https://media-api.xogrp.com/images/db8a066b-57b3-4985-a7e5-cc1b7d5225ae~rt_auto-cr_0.0.2500.1666-rs_2500.1666?ordering=explicit",
  "https://media-api.xogrp.com/images/a5d17b16-1a2f-44d7-85fb-9fbee13aab58~rt_auto-cr_0.381.1666.1633-rs_1666.1252?ordering=explicit",
  "https://media-api.xogrp.com/images/6911e750-846e-4773-924c-6ce1af155b82~rt_auto-cr_0.294.1666.1546-rs_1666.1252?ordering=explicit",
  "https://media-api.xogrp.com/images/73a3f1fa-9e46-48be-b55e-889f3a23332e~rt_auto-cr_0.0.2500.1666-rs_2500.1666?ordering=explicit",
  "https://media-api.xogrp.com/images/5af57465-af7c-43c5-99cf-787afb02165e~rt_auto-cr_0.0.2500.1666-rs_2500.1666?ordering=explicit"
]
// search the html document and look for the first instance of button
let btn = document.querySelector("button");
// searches html doc for first img instance
let img = document.querySelector("img");
let counter = 1;

// ups the source img by 1 with each click, if counter hits 6 in the index, the undefined position, it resets to 0.
btn.addEventListener("click", function(){
    if(counter === 6){
      counter = 0;
    }
    img.src = pics[counter];
    counter = counter + 1;
});