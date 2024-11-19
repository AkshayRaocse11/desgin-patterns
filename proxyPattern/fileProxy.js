class File {
    constructor(fileName, content) {
        this.fileName = fileName;
        this.content = content ;
    }

    read(){
        console.log(`Reading the content: ${this.content}, of this file ${this.fileName}`);
    }

    update(newContent){
        this.content = newContent;
        return `${this.content}: Updated Content`;
    }
}

class FileProxy {
    constructor(fileName, content) {
        this.file = new File(fileName, content);
    }

    setUserRole(userRole){
        this.userRole = userRole;
    }

    read(){
        console.log(`Checking read permissions for role: ${this.userRole}`);
        if (this.canRead()) {
            this.file.read();
        }else{
            console.log(`Access Denied for read and userRole is : ${this.userRole}`);
        }
    }

    update(newContent){
        console.log(`Checking update permissions for role: ${this.userRole}`);
        if (this.canUpdate()) {
            console.log(this.file.update(newContent))
        } else {
            console.log(`Access Denied for updating and userRole is : ${this.userRole}`);
        }
    }

    canRead(){
        return this.userRole === 'Admin' || this.userRole === "learner" || this.userRole === 'Editor' ? true : false;
    }

    canUpdate(){
        return this.userRole === 'Admin' || this.userRole === 'Editor' ? true : false;
    }
}

const adminFileProxy = new FileProxy("documentFile.txt","Learning Css Hard ways");
adminFileProxy.setUserRole("Admin");
adminFileProxy.read();
adminFileProxy.update("Learning Html Course");

adminFileProxy.setUserRole("learner");
adminFileProxy.update("Learning JS Course");
adminFileProxy.read();

adminFileProxy.setUserRole("Editor");
adminFileProxy.update("Learning French Language");
adminFileProxy.read();

adminFileProxy.setUserRole("Guest");
adminFileProxy.read();

//The Proxy Pattern is a structural design pattern that provides an object representing another object. 
//The proxy controls access to the real object by acting as an intermediary. 
//The proxy can add additional behavior before or after delegating the task to the real object. It can be used for various purposes, such as lazy initialization, logging, access control, and caching.

