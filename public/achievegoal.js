// Define the progmaintain function
function progmaintain(goal, activity) {
    if (goal >= activity) {
        return true; // Return true if goal is greater than or equal to activity
    } else {
        return false; // Return false otherwise
    }
}

// Define the achievement function
function achievement(curlevel, curday, progm) {
    // Define the target levels
    const target = {0: 1, 1: 4, 2: 7, 3: 14, 4: 21};
    
    if (progm) {
        // Check if progm is true
        if (curday >= target[curlevel] && curday < target[curlevel + 1]) {
            // Check if curday is within the target range for the current level
            return [curlevel, curday]; // Return the current level and day
        } else {
            curlevel += 1; // Increment the current level
            return [curlevel, curday]; // Return the updated level and current day
        }
    } else {
        curday = target[curlevel]; // Set curday to the target for the current level
        return [curlevel, curday]; // Return the current level and updated current day
    }
}
