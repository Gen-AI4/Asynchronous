//Question # 2 Write a function simulateTask that simulates a task by logging "Task started", waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
var simulatesTask = function () {
    setTimeout(function () {
        console.log("Task completed");
    }, 1000);
    console.log("Task started");
};
simulatesTask();
