const areOpposite = (direction1, direction2) => {
    return (direction1 == "Nord" && direction2 == "Sud") || (direction1 == "Sud" && direction2 == "Nord") ||
           (direction1 == "Est" && direction2 == "Ouest") || (direction1 == "Ouest" && direction2 == "Est");
}

const reduceDirections = (directions) => {
    for(let i = 0; i < directions.length - 1; i++){
        if(areOpposite(directions[i], directions[i+1])){
            directions.splice(i, 2);
            return reduceDirections(directions);
        }
    }
    return directions;
}