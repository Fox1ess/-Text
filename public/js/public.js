$(() => {
    $('#submit').on('click', (e) => {
        $.ajax({
            url: '/pushForm',
            method: "POST",
            data: {
                name: $("#name").val(),
                phone: $("#phone").val(),
                context: $("#context").val()
            },
            success(r){
                console.log(r);
                if (!r.success) return alert()
                alert("提交成功");
            },
            error(e){
                console.log(e);
            }
        })
    })
})