function greet(name: string, title?: string): string {
    return title ? `Hello, ${title} ${name}` : `Hello, ${name}`;
}
greet("Rupesh"); 
greet("Rupesh", "Mr.")