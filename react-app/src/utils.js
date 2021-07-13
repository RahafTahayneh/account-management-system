export const getColorByStatus = (status) => {
    switch (status){
        case 'pending':
            return '#ff8400';
        case 'approved':
            return '#26d2b0'
        case 'funded':
            return '#4285f4';
        case 'closed':
            return '#fb5e50'
    }
}