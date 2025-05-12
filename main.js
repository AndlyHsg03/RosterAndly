class HolidayRoster {
            constructor() {
                this.schedule = {
                    Monday: [
                        { emoji: "💻", task: "12:00-14:00: Coding Practice", type: "coding" },
                        { emoji: "📊", task: "21:00-23:00: Trading learn", type: "trading" }
                    ],
                    Tuesday: [
                        { emoji: "💻", task: "15:00-18:00: coding learn", type: "coding" }
                    ],
                    Wednesday: [
                        { emoji: "📊", task: "10:00-12:00: Trading learn", type: "trading" },
                        { emoji: "💻", task: "21:00-23:00: Coding again", type: "coding" }
                    ],
                    Thursday: [
                        { emoji: "📊", task: "09:00-11:00: Trading", type: "trading" },
                        { emoji: "💻", task: "15:00-17:00: Coding Js", type: "coding" }
                    ],
                    Friday: [
                        { emoji: "💻", task: "10:00-12:00: Coding again", type: "coding" },
                        { emoji: "📊", task: "20:00-22:00: learn to trade again", type: "trading" }
                    ],
                    Saturday: [
                        { emoji: "🎮", task: "20:00-22:00: Fun Coding", type: "coding" }
                    ],
                    Sunday: [
                        { emoji: "😴", task: "Full Day Rest", type: "rest" }
                    ]
                };
            }
            
            renderSchedule() {
                const scheduleElement = document.getElementById('schedule');
                scheduleElement.innerHTML = '';
                
                for (const [day, tasks] of Object.entries(this.schedule)) {
                    const dayCard = document.createElement('div');
                    dayCard.className = 'day-card';
                    
                    const dayHeader = document.createElement('div');
                    dayHeader.className = 'day-header';
                    dayHeader.innerHTML = `
                        <span>${day}</span>
                    `;
                    
                    const tasksContainer = document.createElement('div');
                    tasksContainer.className = 'tasks';
                    
                    tasks.forEach(task => {
                        const taskElement = document.createElement('div');
                        taskElement.className = `task ${task.type}`;
                        taskElement.innerHTML = `
                            <span class="task-emoji">${task.emoji}</span>
                            <span>${task.task}</span>
                        `;
                        tasksContainer.appendChild(taskElement);
                    });
                    
                    dayCard.appendChild(dayHeader);
                    dayCard.appendChild(tasksContainer);
                    scheduleElement.appendChild(dayCard);
                }
            }
            
            updateProgress() {
                // Simulate progress - in real app you would track actual progress
                const progressBar = document.getElementById('progress-bar');
                const progressText = document.getElementById('progress-text');
                let progress = 0;
                
                const animateProgress = () => {
                    if (progress < 35) { // Starting at 35% to show some progress
                        progress += Math.random() * 5;
                        if (progress > 100) progress = 100;
                        progressBar.style.width = `${progress}%`;
                        progressText.textContent = `${Math.round(progress)}%`;
                        setTimeout(animateProgress, 200);
                    }
                };
                
                animateProgress();
            }
        }
        
        // Initialize and render
        const roster = new HolidayRoster();
        roster.renderSchedule();
        
        // Start progress animation after a short delay
        setTimeout(() => {
            roster.updateProgress();
        }, 500);
        
        // Make today's card stand out
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date().getDay();
        const newToday = today-1;
        setTimeout(() => {
            const dayCards = document.querySelectorAll('.day-card');
            if (dayCards[newToday]) {
                dayCards[newToday].style.transform = 'scale(1.03)';
                dayCards[newToday].style.boxShadow = '0 8px 16px rgba(233, 69, 96, 0.3)';
                dayCards[newToday].style.border = '1px solid #e94560';
            }
        }, 1000);