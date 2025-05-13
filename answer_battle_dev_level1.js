const getLastDelegation = (delegations) => {
    let lastDelegation; 
    let lastDelegationTime;
    
    for(const delegation of delegations){
        const [name, distance, speed] = delegation.split(" ");
        const time = distance / speed; 
        
        if(!lastDelegation || time > lastDelegationTime){
            lastDelegation = name; 
            lastDelegationTime = time;
        }
    }   
    
    return lastDelegation;
}