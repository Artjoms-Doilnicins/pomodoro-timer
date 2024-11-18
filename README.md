# Pomodoro Timer 

[https://artjoms-doilnicins.github.io/pomodoro-timer/](https://artjoms-doilnicins.github.io/pomodoro-timer/)

A simple application that helps users stay productive by breaking work into intervals, typically 25 minutes of focused work followed by a short break. This project combines **HTML** , **CSS** , and **JavaScript**  to create an interactive and visually appealing timer.

The Pomodoro Timer is designed to boost productivity by helping you focus on tasks in manageable intervals.

## Features 

### HTML 

The structure of the Pomodoro Timer is minimal and functional:
 
- **Heading** : Displays the title "Pomodoro Timer."
 
- **Timer Display** : Shows the countdown time in `MM:SS` format, defaulting to `25:00`.
 
- **Control Buttons** : 
  - **Start** : Starts the timer countdown.
 
  - **Pause** : Pauses the timer at its current value.
 
  - **Reset** : Resets the timer back to 25 minutes.

### CSS 

The Pomodoro Timer features a clean, modern design with responsive styling:
 
- **Root Variables** :
  - Centralized variables for colors, shadows, and animations ensure consistent and customizable design.
 
- **Background and Layout** :
  - A dark-themed background with dynamic gradient animation gives the page a sleek and professional appearance.

  - The layout uses flexbox for centering the timer, making it responsive across different screen sizes.
 
- **Timer Display** :
  - The time display uses bold, large fonts to ensure readability.

  - Styled with a bright, contrasting color for emphasis.
 
- **Control Buttons** : 
  - Each button (`Start`, `Pause`, `Reset`) has a distinct color to represent its function.

  - Buttons include hover effects, with scaling and shadow animations for a polished interactive experience.

### JavaScript 

The JavaScript script provides all the timer's functionality, including updating the display and handling user interactions:
 
- Tracks the remaining time in seconds (`timeLeft`) and manages the timer state with an interval (`interval`).
 
- **`updateTimer()`** : Converts `timeLeft` into `MM:SS` format and updates the timer display.
 
- **`startTimer()`** : Starts the countdown, ensuring only one interval runs at a time.
 
- **`pauseTimer()`** : Pauses the timer by clearing the active interval. 
  
- **`resetTimer()`** : Resets the timer to the default 25 minutes and stops any active interval.
 
- An alert notifies the user when the timer reaches zero, signaling the end of a Pomodoro session.

## How It Works 
 
1. Click the "Start" button to begin the timer, counting down from 25 minutes.
 
2. Use the "Pause" button to pause the countdown at its current value.
 
3. Click the "Reset" button to reset the timer back to the default 25 minutes.
 
4. When the countdown reaches zero, an alert notifies you that the session is complete.
