export const project = function (name, todos) {
    const p = Object.create(null);
    p.name = name;
    p.todos = todos;
    return p;
};

export const todo = function (name, priority, date) {
    const t = Object.create(null);
    t.name = name;
    t.priority = priority;
    t.date = date;
    return t;
}

let randomTodos = [todo("make todos", "high", "today")];
let randomProject = project("Project 2", randomTodos);

export const projects = [randomProject];
export const todos = () => {
    let at = [];
    projects.forEach(p => at = at.concat(p.todos));
    return at;
};

export const defaultProject = project("Todos", todos());