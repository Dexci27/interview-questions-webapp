# interview-questions-webapp

![App preview](interview-questions-app-preview.png)

## Overview
A browser-based interview practice tool that presents randomized behavioral interview questions under timed conditions.

The application simulates a structured mock interview by cycling through multiple timed prompts, tracking total speaking time, and preventing repeated questions.

This project focuses on state management, timing logic, and user interaction control using vanilla JavaScript.

## What This Project Demonstrates
- JavaScript interval and timing control
- Session state management
- DOM manipulation
- Randomization logic
- User interaction safeguards
- Thinking about real-world simulation constraints

## Purpose
Technical interviews often test coding ability, but behavioral interviews require structured thinking under time pressure.

I used this app for personal interview preparations.

This tool was designed to help users:
- Practice answering common interview questions
- Think clearly within time constraints
- Simulate multiple interview rounds
- Track cumulative response time

## Core Functionality
- Countdown timer for each question
- Automatic transition to new questions
- Randomized question selection
- Prevention of repeated questions within a session
- Pause and resume functionality
- “Pass question” feature with remaining-time tracking
- Total time accumulation across rounds
- Automatic session termination after a fixed number of questions

## How It Works
The application maintains session state using global variables:
- `maxTime` – time per question
- `maxCount` – number of interview rounds
- `answeredQuestionsList` – prevents repetition
- `totalTime` – accumulates time spent

### Timer Logic
- `countTime()` initializes the countdown and triggers question changes.
- `setInterval()` handles second-by-second decrementing.
- `restartCounting()` manages round transitions and final session completion.
- `pauseTime()` and `resumeTime()` control interval state safely.

The system ensures:
- Questions cannot change while paused
- Users cannot bypass time controls
- Questions are not repeated during a session

## Design Decisions

### Controlled State Transitions
The timer logic is centralized to avoid inconsistent states (e.g., double intervals running simultaneously).

### Randomization with Memory
A while-loop ensures newly selected questions are not already answered in the session.

### Session-Based Structure
Instead of infinite scrolling questions, the app simulates a fixed-length interview to mirror real-world conditions.

## Current Limitations
- Pause logic can be further improved to fully disable all interaction during paused state
- No full “reset session” button yet
- UI can be enhanced for better visual feedback

## Future Improvements
- Add a complete restart/reset feature
- Improve state locking during pause
- Add difficulty levels (technical vs behavioral)
- Store session history using local storage
- Add performance analytics (average response time per question)

