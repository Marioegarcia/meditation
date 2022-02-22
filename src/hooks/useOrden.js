

export const useOrden = () => {
  

 

    const ordenarDone = data => {
        

        data.sort((a, b) => {
            if (a.done == b.done) {
                return 0;
            }
            if (a.done < b.done) {
                return -1;
            }
            return 1;
        });

        return data;
    };



    return {
        ordenarDone,
    };
};