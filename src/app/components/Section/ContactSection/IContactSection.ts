interface IContactSection {
    values: {
        firstName: string;
        lastName: string;
        email: string;
        object: string;
        message: string;
    },
    
    errors: {
        firstName: string;
        lastName: string;
        email: string;
        object: string;
        message: string;
    }
}

export default IContactSection;