     // Timeline content data
        const timelineData = [
            {
                year: "1996",
                content: "I was born in 1996 in São Paulo. My father always encouraged me to use computer. I remember staying up late night just playing games as Counter-Strike and Ragnarok. This led me to my first passion for technology and electronic games as well. Also I'm very grateful for these games because I can definitely say that I am more creative due to the difficulty of these games." 

            },
            {
                year: "2016",
                content: "In 2016 I was studying to choose in between Administration or Engineer course. It was a tough decision for me, however I choose Engineering course for several reasons such as physics and math."
            },
            {
                year: "2017",
                content: "In 2017 I was approved at Centro Universitário FEI in São Bernardo do Campo-SP. My first year wasn't easy but I was resilient to stay and challenge myself to move forward in this journey. One of my most remarkable events was getting a 10 on a exam which I studied the whole night."
            },
            {
                year: "2020",
                content: "In 2020 at pandemics, I decided to invest on extracurricular courses like Excel and Power BI. Despite the knowledge in Excel and Power BI, I've done this courses to verify any gap in my knowledge and expand my skills. Maybe this was the hardest part of my life (and others) so far, staying locked in house wasn't easy and losing about 2 years of my graduation not being able to see my friends was very tough for me. This year was marked by uncertainty about my graduation since we had no money left due to pandemic. But again we got through."
            },
            {
                year: "2021",
                content: "In 2021 I had my first professional experience at Bridgestone South America as Process Engineer Intern on Passenger's tire team. It was an amazing experience in which I could live the daily routine of the plant and understand the complexity of producing a tire. I am very grateful for my boss, the team and the company as well for believing in my skills."
            },
            {
                year: "2022-2023",
                content: "In the end of 2022, I've graduated in Production Engineering at Centro Universitário FEI and unfortunately my internship has come to an end. In 2023 I was hired by Certiphic as Business Intelligence Analyst focusing entirely on report for our customers. I was able at Certiphic to develop new skills such as Power Apps application and understand the complexity of build a building."
            },
            {
                year: "2024",
                content: "In 2024 my joruney at Certiphic ended and I've started a new journey at Ajinomoto do Brasil as Business Intelligence Specialist."
            }
        ];

        // Dynamically create timeline points
        const timelinePoints = document.getElementById('timelinePoints');
        const timelineContent = document.getElementById('timelineContent');
        
        // Initialize with the first content item
        timelineContent.textContent = timelineData[0].content;
        
        // Create all points
        timelineData.forEach((data, index) => {
            const pointDiv = document.createElement('div');
            pointDiv.className = 'timeline-point' + (index === 0 ? ' active' : '');
            pointDiv.setAttribute('data-index', index);
            
            // Add year labels
            const yearDiv = document.createElement('div');
            yearDiv.className = 'timeline-year';
            yearDiv.textContent = data.year;
            pointDiv.appendChild(yearDiv);
            
            // Add location marker to the first point
            if (index === 0) {
                const markerDiv = document.createElement('div');
                markerDiv.className = 'location-marker';
                markerDiv.textContent = '📍';
                markerDiv.id = 'locationMarker';
                pointDiv.appendChild(markerDiv);
            }
            
            timelinePoints.appendChild(pointDiv);
        });
        
        // Handle hamburger menu
        const hamburger = document.getElementById('hamburger');
        const menu = document.getElementById('menu');
        
        hamburger.addEventListener('click', function() {
            this.classList.toggle('is-active');
            menu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
                menu.classList.remove('active');
                hamburger.classList.remove('is-active');
            }
        });
        
        // Handle menu navigation
        const menuItems = document.querySelectorAll('.menu-item');
        const sections = document.querySelectorAll('.section');
        
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                // Update active menu item
                menuItems.forEach(menuItem => {
                    menuItem.classList.remove('active');
                });
                item.classList.add('active');
                
                // Show active section
                const sectionId = item.getAttribute('data-section');
                sections.forEach(section => {
                    section.classList.remove('active');
                });
                document.getElementById(sectionId).classList.add('active');
            });
        });
        
        // Timeline navigation with enhanced transitions
        const allTimelinePoints = document.querySelectorAll('.timeline-point');
        
        allTimelinePoints.forEach(point => {
            point.addEventListener('click', () => {
                // Get index from the clicked point
                const index = parseInt(point.getAttribute('data-index'));
                
                // Update active state for all points
                allTimelinePoints.forEach(p => {
                    p.classList.remove('active');
                    // Remove any existing marker
                    const existingMarker = p.querySelector('.location-marker');
                    if (existingMarker) {
                        p.removeChild(existingMarker);
                    }
                });
                
                // Set active state for clicked point
                point.classList.add('active');
                
                // Move marker to the clicked point
                const markerDiv = document.createElement('div');
                markerDiv.className = 'location-marker';
                markerDiv.textContent = '📍';
                point.appendChild(markerDiv);
                
                // Update content with fade effect
                timelineContent.style.opacity = '0';
                timelineContent.style.transform = 'translateY(10px)';
                
                setTimeout(() => {
                    timelineContent.textContent = timelineData[index].content;
                    timelineContent.style.opacity = '1';
                    timelineContent.style.transform = 'translateY(0)';
                }, 300);
            });
        });

            // Add this script after the existing script in your HTML
    document.addEventListener('DOMContentLoaded', function() {
        // Animated entrance for experience cards
        const experienceCards = document.querySelectorAll('.experience-card');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        experienceCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `all 0.5s ease ${index * 0.2}s`;
            observer.observe(card);
        });
        
        // Navigation from skills connection link
        const skillsLink = document.querySelector('.link-to-skills');
        if (skillsLink) {
            skillsLink.addEventListener('click', function() {
                const sectionId = this.getAttribute('data-section');
                
                // Update active menu item
                const menuItems = document.querySelectorAll('.menu-item');
                menuItems.forEach(menuItem => {
                    menuItem.classList.remove('active');
                    if (menuItem.getAttribute('data-section') === sectionId) {
                        menuItem.classList.add('active');
                    }
                });
                
                // Show active section
                const sections = document.querySelectorAll('.section');
                sections.forEach(section => {
                    section.classList.remove('active');
                });
                document.getElementById(sectionId).classList.add('active');
                
                // Close menu if open
                const menu = document.getElementById('menu');
                const hamburger = document.getElementById('hamburger');
                menu.classList.remove('active');
                hamburger.classList.remove('is-active');
            });
        }
    });
        
    // Animation for skill cards
function setupSkillsAnimation() {
    const skillCards = document.querySelectorAll('.skill-card, .language-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    skillCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// Call this function when the Skills section is activated
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        if(item.getAttribute('data-section') === 'skills') {
            setTimeout(setupSkillsAnimation, 100);
        }
    });
});
