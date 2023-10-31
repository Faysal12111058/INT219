        // Typing Script JS
        var typed = new Typed(".typing",{
            strings: ["Web Designer", "Web Developer", "Youtuber", "Blogger"],
            typeSpeed: 80,
            backSpeed: 80,
        });

        var typed = new Typed(".typing-2",{
            strings: ["Web Developer", "Web Designer", "Youtuber", "Blogger"],
            typeSpeed: 100,
            backSpeed: 60,
        });

        // Show/Hide FAQs answer
        const faqs = document.querySelectorAll('.faq');
        faqs.forEach(faq => {
            faq.addEventListener('click', () => {
                faq.classList.toggle('open');

                // Jquery is used here: Changing icon using jQuery
                const icon = $(faq).find('.faq_icon i');
                if (icon.hasClass('fa-plus')) {
                    icon.removeClass('fa-plus').addClass('fa-minus');
                } else {
                    icon.removeClass('fa-minus').addClass('fa-plus');
                }
            });
        });

        // Show/hide nav menu
        const menu = document.querySelector('.nav_menu');
        const menuBtn = document.querySelector('#open-menu-btn');
        const closeBtn = document.querySelector('#close-menu-btn');

        // Jquery is used here: Handling click event with jQuery
        $(menuBtn).on('click', () => {
            $(menu).css('display', 'flex');
            $(closeBtn).css('display', 'inline-block');
            $(menuBtn).css('display', 'none');
        });

        // Close nav menu
        const closeNav = () => {
            $(menu).css('display', 'none');
            $(closeBtn).css('display', 'none');
            $(menuBtn).css('display', 'inline-block');
        };
        
        // Jquery is used here: Handling click event with jQuery
        $(closeBtn).on('click', closeNav);

        // Nav color change on scroll
        window.addEventListener('scroll', () => {
            // Jquery is used here: Toggle class based on scroll position
            $('nav').toggleClass('window-scroll', window.scrollY > 100);
        });