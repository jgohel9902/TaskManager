// Get elements
const addTaskBtn = document.getElementById('addTaskBtn');
const addTaskModal = document.getElementById('addTaskModal');
const closeModal = document.getElementById('closeModal');
const taskForm = document.getElementById('taskForm');
const filterBtn = document.getElementById('filterBtn');
const filterDropdown = document.getElementById('filterDropdown');
const filterPriority = document.getElementById('filterPriority');

// Open and close modal
addTaskBtn.addEventListener('click', () => addTaskModal.style.display = 'flex');
closeModal.addEventListener('click', () => addTaskModal.style.display = 'none');

// Add task functionality
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const title = document.getElementById('taskTitle').value;
  const desc = document.getElementById('taskDesc').value;
  const priority = document.getElementById('taskPriority').value;
  const category = document.getElementById('taskCategory').value;

  // Create new task card
  const taskCard = document.createElement('div');
  taskCard.classList.add('task-card');
  taskCard.setAttribute('data-priority', priority);
  taskCard.innerHTML = `
    <h3>${title}</h3>
    <p>${desc}</p>
    <span class="task-meta">Priority: ${priority}</span>
  `;

  // Append to selected category
  document.getElementById(category).appendChild(taskCard);

  // Close modal and reset form
  addTaskModal.style.display = 'none';
  taskForm.reset();
});

// Show/hide filter dropdown
filterBtn.addEventListener('click', () => {
  filterDropdown.style.display = filterDropdown.style.display === 'block' ? 'none' : 'block';
});

// Filter tasks by priority
filterPriority.addEventListener('change', (e) => {
  const selectedPriority = e.target.value;
  const tasks = document.querySelectorAll('.task-card');

  tasks.forEach(task => {
    if (selectedPriority === 'all' || task.dataset.priority === selectedPriority) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
});
