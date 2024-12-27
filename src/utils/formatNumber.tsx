const FormatNumber = {

    /**
     * Chuyển đổi số từ hàng ngàn, triệu, tỷ thành chuỗi như: "1 N", "1 Tr", "1 T"
     * @param number 
     * @returns 
     */
    formatNumberToString: (number: number): string => {
        if (number < 1000) return number.toString();

        const thousand = number / 1000;
        const million = number / 1000000;
        const billion = number / 1000000000;

        let numberToStringFormat = "";
        if (Math.floor(billion) > 0) {
            numberToStringFormat = `${billion} T`;
            return numberToStringFormat.replace(".", ",");
        }
        if (Math.floor(million) > 0) {
            numberToStringFormat = `${million} Tr`;
            return numberToStringFormat.replace(".", ",");
        }
        if (Math.floor(thousand) > 0) {
            numberToStringFormat = `${thousand} N`;
            return numberToStringFormat.replace(".", ",");
        }

        return numberToStringFormat.replace(".", ",");
    }

}



export default FormatNumber;
