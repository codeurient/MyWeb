// animation
var typed = new Typed(".typing", {
    strings: ["Backend Developer", "Frontend Web Developer", "IT Helpdesk Specialist", "Data Analyst"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
  })
  // aside
  const nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"), // li tag-lerinin hamisini elde etdik
        totalNavList = navList.length;
  
  let allSection = document.querySelectorAll(".section"), // section tag-lerinin hamisini elde etdik
      totalSection = allSection.length;
  
  for (let i = 0; i < totalNavList; i++) {
      const a = navList[i].querySelector("a"); // a tag-lerini elde edirik
      a.addEventListener("click", function() {
          // removeBackSection();
          for (let j = 0; j < totalNavList; j++) {
              navList[j].querySelector("a").classList.remove("active");
          }
          this.classList.add("active");
          showSection(this);
          if (window.innerWidth < 1200) {
              asideSectionTogglerBtn();
          }
      })
  }
  
  function fromHire() {
      for (let j = 0; j < totalNavList; j++) {
          navList[j].querySelector("a").classList.remove("active");
      }
      document.querySelector('a[href="#contact"]').classList.add("active");
  }
  
  // function removeBackSection() {
  //     for (let i = 0; i < totalSection; i++) {
  //         allSection[i].classList.remove("active");
  //     }
  // }
  
  // function addBackSection(num) {
  //     allSection[num].classList.add("back-section")
  // }
  
  function showSection(element) {
      // console.log(element);
      const target = element.getAttribute("href").split("#")[1];
      // console.log(target);
      for (let i = 0; i < totalSection; i++) {
          allSection[i].classList.remove("active");
      }
      // console.log(document.getElementById(target));
      document.getElementById(target).classList.add("active");
  }
  
  document.querySelector(".hire-me").addEventListener("click", function() {
    //   const sectionIndex = this.getAttribute("data-section-index");
    //   console.log(sectionIndex);
      // console.log(this);
      showSection(this);
      fromHire();
      // removeBackSection();
      // addBackSection(sectionIndex);
  });
  
  const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");
  navTogglerBtn.addEventListener("click", () => {
      asideSectionTogglerBtn()
  });
  
  function asideSectionTogglerBtn() {
      aside.classList.toggle("open");
      navTogglerBtn.classList.toggle("open");
      for (let i = 0; i < totalSection; i++) {
          allSection[i].classList.toggle("open");
      }
  }


  const accordion = document.getElementsByClassName('contentBx');

  for (i=0; i<accordion.length; i++)
  {
    accordion[i].addEventListener('click', function() 
    {
        this.classList.toggle('active')
    })
  }