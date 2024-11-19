# Design Patterns in JavaScript

This repository contains examples of commonly used design patterns in JavaScript, designed to help developers understand and implement these patterns in their projects.

## Table of Contents
- [Singleton Pattern](#singleton-pattern)
- [Proxy Pattern](#proxy-pattern)

---
## Singleton Pattern - 🔗 **Reference:** [Singleton Pattern Code](singletonPattern/counter.js)
The Singleton pattern restricts the instantiation of a class to a single instance. It is useful when exactly one object is needed to coordinate actions across a system.

### Advantages
- **Controlled Access to a Single Instance**: Ensures that there is controlled access to the sole instance, making it easier to manage resources.
- **Reduced Memory Usage**: By ensuring only one instance is created, memory usage is optimized, especially in cases where the instance creation is resource-heavy.
- **Global Access Point**: Provides a global point of access, making it straightforward to manage shared resources or states.

### Disadvantages
- **Hidden Dependencies**: The Singleton pattern can introduce hidden dependencies in the code, making it harder to test and understand.
- **Testing Challenges**: Singleton classes can complicate unit testing, as it may be difficult to mock or reset their state.
- **Potential for Unwanted Global State**: Misuse of Singletons can lead to problems related to global state management and unpredictable behavior in larger systems.
- **Concurrency Issues**: In a multi-threaded environment, careful implementation is required to avoid synchronization problems.

## Proxy Pattern - 🔗 **Reference:** [Proxy Pattern Code](proxyPattern/FileProxy.js)
With a Proxy object, we get more control over the interactions with certain objects. A proxy object can determine the behavior whenever we’re interacting with the object, for example when we’re getting a value, or setting a value.

Generally speaking, a proxy means a stand-in for someone else. Instead of speaking to that person directly, you’ll speak to the proxy person who will represent the person you were trying to reach. The same happens in JavaScript: instead of interacting with the target object directly, we’ll interact with the Proxy object.

**Tradeoffs**
Proxies are a powerful way to add control over the behavior of an object. A proxy can have various use-cases: it can help with validation, formatting, notifications, or debugging.
Overusing the Proxy object or performing heavy operations on each handler method invocation can easily affect the performance of your application negatively. It’s best to not use proxies for performance-critical code.

### Advantages:
- **Access Control**: Manages access to sensitive resources based on user roles.
- **Decoupling**: Separates access control from the actual object, making permission management easier.
- **Security**: Protects critical operations by preventing unauthorized access.
- **Centralized Authorization**: Keeps authorization logic in one place, making it easier to manage.

### Disadvantages:
- **Performance Overhead**: Adds extra layers that may slow down operations.
- **Complexity**: Can complicate the code if the proxy logic becomes too complex.
- **Misuse**: May lead to unnecessary complexity if access control isn’t needed.


## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
