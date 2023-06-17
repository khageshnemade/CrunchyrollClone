import React from "react";

function Alert() {
  return (
    <>
      <div className="row justify-content-center my-1">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="alert alert-info">
                <strong>1/ What is CrunchyRoll ?</strong>
                <br />
                CrunchyRoll is a free site to watch anime and you can even
                download subbed or dubbed anime in ultra HD quality by any
                registration method or payment. By having No Ads in all kinds,
                we are trying to make it the safest site for free anime.
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="alert alert-info">
                <strong>2/ Is CrunchyRoll safe?</strong>
                <br />
                Yes we are, we do have only one Ads to cover the server cost and
                we keep scanning the ads 24/7 to make sure all are clean, If you
                find any ads that is suspicious, please forward us the info and
                we will remove it.
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="col-md-12 col-sm-12">
        <div className="alert alert-success">
          <ul>
            Before building CrunchyRoll, we've checked many other free anime
            sites, and learnt from them. We only keep the good things and remove
            all the bad things from all the competitors, to put it in our
            CrunchyRoll website. Let's see how we're so confident about being
            the best site for anime streaming:
            <li>
              Safety: We try our best to not having harmful ads on CrunchyRoll.
            </li>
            <li>
              Content library: Our main focus is anime. You can find here
              popular, classNameic, as well as current titles from all genres
              such as action, drama, kids, fantasy, horror, mystery, police,
              romance, school, comedy, music, game and many more. All these
              titles come with English subtitles or are dubbed in many
              languages.
            </li>
            <li>
              Quality/Resolution: All titles are in excellent resolution, the
              best quality possible. CrunchyRoll.to also has a quality setting
              function to make sure our users can enjoy streaming no matter how
              fast your Internet speed is. You can stream the anime at 360p if
              your Internet is being ridiculous, Or if it is good, you can go
              with 720p or even 1080p anime.
            </li>
            <li>
              Streaming experience: Compared to other anime streaming sites, the
              loading speed at CrunchyRoll.to is faster. Downloading is just as
              easy as streaming, you won't have any problem saving the videos to
              watch offline later.
            </li>
            <li>
              Updates: We updates new titles as well as fulfill the requests on
              a daily basis so be warned, you will never run out of what to
              watch on CrunchyRoll.
            </li>
            <li>
              Device compatibility: Zoro works alright on both your mobile and
              desktop. However, we'd recommend you use your desktop for a
              smoother streaming experience.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Alert;
