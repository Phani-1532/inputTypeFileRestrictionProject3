

//You can delete the comments of console.log() output statements and access the code step by step

let allowedFiles = ['png', 'jpg', 'jpeg']
        function validateFile(e){
           // console.log(e.target)         //it will give you the whole input tag with file name what you have selected
          // console.dir(e.target)          // it will give you whole info in object and you can access files in that directory
                                            //e.target.files it will give you whole info about files including names and title we can access that

            let file = e.target.files[0]    //why i choose 0 in index means i am selecting one file only it will be present in first index only, if you choose multiple files you have to give 
            let size = file.size
           // console.log(file)
            let fname = file.name            // we are accessing file name and splitting it into two parts and comparing with the extension of the file and allowedFiles
           // console.log(fname)
            let ext = fname.split('.')
           // console.log(ext[1])
            if(allowedFiles.includes(ext[1]) && (size<1000 * 1024)){  //nearly MB size
                alert('valid file and perfect size file')
            }
            else{
                alert('invalid file or file size have more than required size ')
                e.target.value = ''  
            }
        }

        //1024 bytes = 1 KB
        //1024 KB = 1 MB
        //1024 MB = 1 GB

        //sharing the file what you selected to your local apps
        let img = document.getElementById('files')
        async function shareFile() {
            let file = img.files
            if(navigator.share){
                navigator.share({
                    title: "Demanded file",
                    text: "This is the file what you asked",
                    files:file
                })
            }
        }