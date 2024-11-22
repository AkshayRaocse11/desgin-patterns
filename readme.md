# Design Patterns in JavaScript

This repository contains examples of commonly used design patterns in JavaScript, designed to help developers understand and implement these patterns in their projects.

## Table of Contents
- [Singleton Pattern](#singleton-pattern)
- [Proxy Pattern](#proxy-pattern)
- [Factory Pattern](#factory-pattern)

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

## **Factory Design Pattern**

### **Definition**  
The **Factory Pattern** is a **creational design pattern** that provides an interface or method to create objects without exposing the creation logic to the client. Instead of using the `new` keyword to create an object, the Factory Pattern delegates the instantiation responsibility to a special method (factory method), making the code more flexible and maintainable.  

---

### **In Simple Terms**  
- Imagine a **pizza restaurant**: you order a pizza (like Margherita or Pepperoni) without worrying about how it's made. The restaurant's kitchen is like the factory, creating the pizza for you.  
- Similarly, in the Factory Pattern, you ask the factory for an object (like a car or a notification system), and it gives you the right one without needing to know the exact details of how it was created.  

---

### **Key Points to Remember**  
1. **Purpose**: To centralize object creation logic and decouple it from the rest of the application.  
2. **Avoid Hard-Coding**: The pattern reduces the use of `new` and avoids tightly coupling the client code to specific classes.  
3. **Dynamic Behavior**: It allows the creation of objects based on some input or logic without the client knowing the specifics.  
4. **Example Use Case**: Creating different notification types (Email, SMS, Push) through a single factory method.  

---

### **Advantages**  
1. **Encapsulation of Creation Logic**: The object creation code is centralized in one place, making it easier to manage.  
2. **Flexibility**: New types of objects can be added without changing the client code.  
3. **Loose Coupling**: The client code depends on an abstract interface or factory, not concrete classes.  
4. **Improved Maintainability**: Centralizing object creation makes the code easier to debug, test, and modify.  

---

### **Disadvantages**  
1. **Complexity**: Can introduce additional layers of abstraction, making the code harder to follow for small projects.  
2. **Overhead**: For simple object creation, using the Factory Pattern might be overkill.  
3. **Tight Coupling with Factory**: While it decouples the client from specific classes, it introduces a dependency on the factory itself.  

---

### **When to Use the Factory Pattern**  
1. You need to create objects without specifying their exact class.  
2. The exact type of the object may depend on some dynamic input (e.g., user input or configuration).  
3. Adding new types of objects should be easy without modifying existing client code.  

---

### **Quick Summary**  
- The Factory Pattern is about **creating objects** without directly instantiating them using the `new` keyword.  
- It focuses on **decoupling the client code** from the object creation logic, improving maintainability and flexibility.  
- Best used when the type of object to be created can vary or needs to be determined dynamically.  



## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
