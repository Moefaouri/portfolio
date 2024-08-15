$('.navigation__item').on('click', function(){
    $('.navigation__checkbox').click()
})

// animate skill progress bar when user reach skill section
const skillsSection = $('.skills-section')[0]
const skillsObserver = new IntersectionObserver(function(entries, observer) {
    const [entry] = entries;

    if(!entry.isIntersecting) return

    $('.progress-value').addClass('progress-value--animate');
    observer.unobserve(entry.target)
})

skillsObserver.observe(skillsSection, {
    root: null,
    threshold: 0,
})

////////////////////////////////////////////
// Sticky navigation

const header = $('.header')[0];
const imgContainer = $('.img-container')[0];
const headerHeight = header.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) header.classList.add('sticky');
  else header.classList.remove('sticky');

};

const imgObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});

imgObserver.observe(imgContainer);

// change text

$(document).ready(function() {
  var jobTitles = ["UI/UX Designer", "Front-End Developer"];
  var currentIndex = 0;

  function changeTitle() {
    currentIndex = (currentIndex + 1) % jobTitles.length;

    $('#job-title')
      .removeClass('finished')
      .css("width", "0")
      .text(jobTitles[currentIndex]) 
      .animate({ width: '80%' }, 2000, function() {
        $(this).addClass('finished'); 
        setTimeout(changeTitle, 2000); 
      });
  }

  setTimeout(changeTitle, 2000); 
});


function formatMailBody() {
  const name = document.getElementById('name').value;
  const number = document.getElementById('number').value;
  const subject = document.getElementById('Subject').value;
  const message = document.getElementById('Message').value;
  const mail = $(".contact-form").attr('action');
  
  const mailtoLink = `${mail}?subject=${encodeURIComponent(subject)}&body=` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Phone Number: ${encodeURIComponent(number)}%0A` +
      `Message:%0A${encodeURIComponent(message)}`;

  window.location.href = mailtoLink;
  return false; 
}
