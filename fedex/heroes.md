# How to use this image:

- Pull the image from dockerhub
`docker pull adambhun/heroes`
- Create a container from it with the following command:
`x11docker -i -p --size [resolution in pixels like 800x600] -- -v [path to maps]:/usr/share/vcmi/Maps -v [path to saves]:/fakehome -- [image name]` 
- Do some majick with the following commands:
```
export PATH=$PATH:/usr/games
vcmilauncher
```

After the last command the VCMI launcher should appear in the window opened by the first command. Use it to configure the game as you like. Don't forget to enable `VCMI Essentials`.
Finally launch the game with button on the bottom left.

If you want to add savegames, do all of the above, then go to the `Saves` folder in your host machine and got to [your username]/.local/share/vcmi/Saves and copy the saves.

If you want to add maps copy them in the Maps folder, the container will see them.

-Note: the videos and most of the music files are not included in the image file to make it smaller