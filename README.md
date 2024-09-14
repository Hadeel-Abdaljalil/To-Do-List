## Description

In this To-Do List project, I have successfully applied SOLID principles and various design patterns to ensure a well-structured, maintainable, and scalable application. Below is a detailed overview of how these principles and patterns have been integrated into the project:

### SOLID Principles

1. **Single Responsibility Principle (SRP)**
   - **Implementation**: The project is organized so that each class or component has a single responsibility. For example, the `ToDoItem` component is dedicated to rendering individual tasks, while the `ToDoList` component manages the list of tasks and user interactions. Task management operations, such as adding or removing tasks, are handled by a separate `TaskService`.

2. **Open/Closed Principle (OCP)**
   - **Implementation**: The application is designed to be open for extension but closed for modification. This is achieved by using interfaces and abstract classes. For instance, new types of tasks can be added by extending the `Task` class without altering the existing code.

3. **Liskov Substitution Principle (LSP)**
   - **Implementation**: Derived classes are designed to be substitutable for their base classes without affecting the correctness of the application. For example, specialized task types such as `CompletedTask` can replace the base `BasicTask` in any part of the application where a `BasicTask` is expected.

4. **Interface Segregation Principle (ISP)**
   - **Implementation**: Interfaces are tailored to specific functionalities rather than being overly broad. This ensures that classes only implement the methods they actually use. Separate interfaces for task management (`ITaskManager`) and task filtering (`ITaskFilter`) are utilized to keep the design clean and focused.

5. **Dependency Inversion Principle (DIP)**
   - **Implementation**: High-level modules, such as components, depend on abstractions rather than concrete implementations. Dependency injection is used to provide dependencies to components, such as injecting a `TaskManager` into the `TaskListComponent`, which allows for greater flexibility and easier testing.

### Design Patterns

1. **Factory Pattern**
   - **Implementation**: The `TaskFactory` class is used to create different types of tasks. This pattern allows for the creation of tasks without directly instantiating them, providing a common interface for task creation and supporting various task types.

2. **Observer Pattern**
   - **Implementation**: The `TaskObservable` class uses the Observer pattern to notify components of changes in the task list. This pattern facilitates communication between the task management logic and the user interface, ensuring that updates are reflected in real-time.

3. **Strategy Pattern**
   - **Implementation**: Sorting and filtering strategies are implemented using the Strategy pattern. Different sorting methods, such as ascending and descending order, are encapsulated in separate classes (`AscendingSort` and `DescendingSort`), allowing for dynamic changes in sorting behavior without modifying the core sorting logic.

4. **Decorator Pattern**
   - **Implementation**: The `TaskDecorator` class applies additional features, such as labels and priorities, to tasks without modifying the existing `Task` classes. This pattern provides a flexible way to extend the functionality of tasks while maintaining a clean separation of concerns.

By adhering to these principles and utilizing these design patterns, the To-Do List project is designed to be modular, flexible, and easy to maintain, ensuring a robust and scalable application.
