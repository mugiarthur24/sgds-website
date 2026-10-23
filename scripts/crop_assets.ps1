Add-Type -AssemblyName System.Drawing

$mockupPath = "D:\Next Project\sdgs-website\extracted_zip\mockup-website-sdgs-um-buton.png"
$img = [System.Drawing.Image]::FromFile($mockupPath)

$publicDir = "D:\Next Project\sdgs-website\public\images"

function Crop-Image($x, $y, $w, $h, $destName) {
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $bmp = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $w, $h)), $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $destPath = "$publicDir\$destName"
    $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
}

# Clean news crops
Crop-Image 1039 746 84 52 "news-1.png"
Crop-Image 1039 813 84 52 "news-2.png"
Crop-Image 1039 880 84 52 "news-3.png"

$img.Dispose()
Write-Output "News images updated."
