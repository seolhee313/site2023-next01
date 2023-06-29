import React from "react";
import Image from "next/image";
import Link from "next/link";

const unsplash = () => {
    return (
        <section
            id="unsplashSection"
            className="unsplash__wrap score5 section bg-blue"
        >
            <div className="unsplash__inner container">
                <div className="unsplash__text">
                    <h3>음악 이미지 다운로드</h3>
                    <p>
                        음악에 관련된 이미지들을 고화질로 다운로드 받을 수
                        있습니다.
                        <br />
                        상업적 이용은 피해주세요!
                    </p>
                    <Link href="/" className="button-green">
                        자세히 보기
                    </Link>
                </div>
                <div className="unsplash__item">
                    <div>
                        <Image
                            width={400}
                            height={228}
                            src="/assets/images/unsplash/unsplash01.png"
                            alt="unsplashIMG"
                        />
                    </div>
                    <div>
                        <Image
                            width={400}
                            height={228}
                            src="/assets/images/unsplash/unsplash02.png"
                            alt="unsplashIMG"
                        />
                    </div>
                    <div>
                        <Image
                            width={400}
                            height={228}
                            src="/assets/images/unsplash/unsplash03.png"
                            alt="unsplashIMG"
                        />
                    </div>
                    <div>
                        <Image
                            width={400}
                            height={228}
                            src="/assets/images/unsplash/unsplash04.png"
                            alt="unsplashIMG"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default unsplash;
