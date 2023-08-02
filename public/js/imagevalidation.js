function validate_fileupload(input_element)
{
var fileName = input_element.value;
var allowed_extensions = new Array("jpg","png","jpeg");
var file_extension = fileName.split('.').pop().toLowerCase(); 

for(var i = 0; i <= allowed_extensions.length; i++)
{
if(allowed_extensions[i]==file_extension)
{
    return true; // valid file extension
}
}
alert('Invalid file type, please select file type of .png, .jpeg and .jpg');
input_element.value = "";
return false;
}