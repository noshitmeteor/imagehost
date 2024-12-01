
// Dynamic Variables
// %file_name%
// %file_size%
// %uploaded_files%
// %file_upload_timestamp%

export const settings = {
    embed_data: {
        "Site Name": "Uploaded at: %file_upload_timestamp%",
        "Title": "upio's image host | %file_name%",
        "Description": "erm what the flip mane this file is literally %file_size% big but like erm i uploaded %uploaded_files% files",
        "Color": "#7289da",
    },

    site: {
        "Title": "upio's image host",
        "Description": "erm what the flip",
        "Show Credits": true,
    },

    page_redirect: "https://www.upio.dev/"
}

export const upload_limit = 5; // MB