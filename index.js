const send = () =>{
    fetch("https://discord.com/api/webhooks/1273184051171426426/IuWc0ZQz8BG9aTtIroeQj73mFHmz09htuXYLxrZrxApsaST2LHJF5RSB7CvzMWtEc9ft",
        {
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                content:document.getElementById("msgBox").value
            })
        }
    )
}