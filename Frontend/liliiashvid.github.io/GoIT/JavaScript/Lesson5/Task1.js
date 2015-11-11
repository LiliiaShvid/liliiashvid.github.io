
function maxSummaDoneTasks(task) {
    var max = 0;
    for (var score in task) {
        if (task[score ] > max) {
            max = task[score ];
        }
    }
    console.log (max);
}
var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};
console.log(maxSummaDoneTasks(tasksCompleted));
