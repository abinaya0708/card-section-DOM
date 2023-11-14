var container=document.createElement("div");
container.classList.add("container");



var row=document.createElement("div");
    row.classList.add("row");

    var section=document.getElementById("one");
    section.appendChild(container);
    container.appendChild(row);

    var a=[{head:"Walter White",
            sub_head:"Chief Executive Officer",
            image:"images/team-1.jpg",
            para:"Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow"},

            {head:"Sarah Jhonson",
            sub_head:"Product Manager",
            image:"images/team-2.jpg",
            para:"Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut"},

            {head:"William Anderson",
            sub_head:"CTO",
            image:"images/team-3.jpg",
            para:"Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui"},

            {head:"Amanda Jepson",
            sub_head:"Accountant",
            image:"images/team-4.jpg",
            para:"Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur"},

            {head:"Brian Doe",
            sub_head:"Marketing",
            image:"images/team-5.jpg",
            para:"Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit"},

            {head:"Josepha Palas",
            sub_head:"Operation",
            image:"images/team-6.jpg",
            para:"Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel"}];

a.forEach(function(e){
    var col=document.createElement("div");
    col.classList.add("col");

    row.appendChild(col);

    var card=document.createElement("div");
    card.classList.add("card");

    col.appendChild(card);

    var image_div=document.createElement("div");
    image_div.classList.add("image_div");
  
    var image=document.createElement("img");
    image.setAttribute("src",e.image)
  
    var head=document.createElement("h1");
    head.innerHTML=e.head;
    head.classList.add("head");

    var subhead=document.createElement("h3");
    subhead.innerHTML=e.sub_head;
    subhead.classList.add("subhead");

    var para=document.createElement("p");
    para.innerHTML=e.para;
    para.classList.add("para");

    card.appendChild(image_div);
    image_div.appendChild(image);
    card.appendChild(head);
    card.appendChild(subhead);
    card.appendChild(para);
    
})
            



    