     // Timeline content data
        const timelineData = [
            {
                year: "1996",
                content: "Nasci em 1996 em São Paulo e quando criança meu pai sempre me incentivou a utilizar o computador. Esse incentivo à computação fez com que eu me apaixonasse por tecnologia e também por jogos eletrônicos."
            },
            {
                year: "2016",
                content: "Em 2016 realizando o cursinho estava em dúvida entre fazer Administração ou Engenharia porém minha vontade de fazer Engenharia era maior uma vez que já tinha facilidade com tecnologia e também gostava de exatas."
            },
            {
                year: "2017",
                content: "Em 2017 acabei entrando para Engenharia de Produção no Centro Universitário da FEI"
            },
            {
                year: "2020",
                content: "Em 2020 o ano da pandemia começou e com tudo fechado, decidi investir em cursos extracurriculares como por exemplo Excel Avançado e Power BI. Apesar do conhecimento em Excel e Power BI, fiz esses cursos para verificar se tinha alguma lacuna de conhecimento e expandir ainda mais minhas habilidades."
            },
            {
                year: "2021",
                content: "Em 2021, tive minha primeira experiência profissional na Bridgestone South America como Estagiário de Engenharia de Processos na equipe de Pneus de Passageiros. Foi uma experiência incrível na qual pude vivenciar a rotina diária da fábrica e entender a complexidade da produção de pneus."
            },
            {
                year: "2022-2023",
                content: "No final de 2022, me formei em Engenharia de Produção no Centro Universitário FEI e infelizmente meu estágio chegou ao fim. Em 2023 fui contratado pela Certiphic como Analista de Operações focando inteiramente em relatórios para os clientes."
            },
            {
                year: "2024",
                content: "Em 2024 minha carreira na Certiphic terminou e iniciei uma nova jornada na Ajinomoto do Brasil como Analista de Business Intelligence."
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
