import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = ({ currentWallet }) => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <img
        src="https://www.myetherwallet.com/mew-landing-page/_nuxt/peggy.DcEmOzOe.png"
        contain="true"
        alt="img"
        className="absolute top-[200px] md:top-[296px] xl:top-[280px] -left-10 h-[72px] md:h-[130px] xl:h-[150px]"
      />
      <div className="flex items-center justify-center gap-4 sm:gap-8 mb-9 sm:mb-16">
        <h5 className="text-[#0c5876] text-base sm:text-[32px] font-bold -tracking-[0.03em] ">
          MyEtherWallet
        </h5>
        <div className="flex gap-1">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAABQCAYAAAAKlxWDAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUbSURBVHgBvVotdBtHEP6c5hVUJiUyKZFIAyLSAouU2LjGMSpwSpvS2tivNC2tjWvskJKWlCikAQoKiE0KLJIQh4TkPt9MbjSavds96eV7b5/vVnf77czO3+4Z+MT4DJvHoGoPqrZVtVv/431sDiQ6kMbrJ9FDmyIcVu20ajumbxE9eA+bgSd7jUCdpYSDRP+BIyOuE89mE0YqU3wf9P2JNQn3qzau2k+ufxxMgmQ3WJNwT/5OpCm8mi/RIh2RY6UksFI8qtpcrofyl/cXpn8twmEwAUp2KwSHSFhkX8JosLGQLdxE9twEz1G7SBHh647fSXAsk7CYRe/mGA2lmCcmoe4yDt47D/paCa2hXJhrkquaU76ZdI0U4b4MNjAkl3J9bp5JkSVdI5Wefq7aV9L+lb7/UEs2k3uu27Z5h5P6vWp/owVbQR/X5czc/5YYZEee5SRukOka9xIDWRwiBkkoVTIzRIjcYhjcTxBHEfaP0Kx1a1hLEV6hexLTqh1hWRv/IAMRoaoolf8OEau5Uzoi5Rb+ZQ1h+wkySpdMSTmE9Lm5IdPrR8GzC2RK10ZI0B04a3WJyNGp/hNkSkfoGjKqvMTyTBcymPrqVP5ycBrWc3Q4eQQdjEQ0Eo0W2TPuS3hp+igZi9g2Z6b/7cr1GQqgKrVuoPntJEHEQkrXcoZCqNEsgoEnro/u4NPRc/QkjGa6a66HiP3vJXoScg29oYzMdbQxyXb2iJBr+CtiQ9HgbVHk7BEh4Z1YyafunWJnt7ifGIzrpYY0EnL+RjUWO3spBtggWNNwfcLtseB90Md3HlftFQqyPYToVAagulp3PqjrzyM0RnSAQnAN38k1y/SHqEPVLEFmS8ciyRS0UiuRhjVvmez/Bcvr2bUFSBJG4emJG9xv2Yio9skinGO1IiPZvrnfC959hp6EhGZ3i4fm2keaLuPqJNTs7tfT/rVkvcIaYSMNSX9ErUoWS9vuWb+tptopeXFOTGHHDOyjDYkoZVG2J9p2wD6IK+gyx2YyRSg9+uJ6HmENUELO8inqNdTyL3X8ER1zFRPeCpnWMQdoEqxPRd49iqONqtTXJlQdo42vY0bu/ho9CaOaBkI4SbxLzRT7Y05NYzcwdlJRdMomJLgeVKM3GD3qIhbSeOgwc8+cIgNbiX4t5XU7fSEEE6zu6e0GtTMhb2E9kOCxuWdobFXzOmfeUTU+7HppHUKGuOLQ5mMpMwUNh2rRyPMMsZp2g77OQOAlpGHQIBi+NOr8gdoqvTTDgKyzsPKEfOEyeI4lxjHaYUuOQS4hkI46lNgaybW5tnGXkj9FIkJFhJQytVnR70owv9uSg7/ppjVa4+TxJUmpooUMoinp86r9j9qY3qI+2rQZ5YeqfSvXXyJYnhLH1+PKlHH4Y09i5cS/5OvaDbr3HR7bnnBTX9eIUc5DXRJqIlaf0+ogOoXyauZzKxrpklB3wTvSqLapTOIMy2r0ew0/oXEOIcFT/JSR2G8W1pj8oYOe8QxyPjq/Qe0C0+A3usk3qKUh2QPpO0FDrvmS/S9yv3JfyaA0DF8m0k+5LWchRh/9C83aDbF8hHZV4ha64eEgYzSnG7do1s9nC58vB32+cmtdk7OJWfHNTfphhC/c/VUfCS003BFd+fBOK30ItZaJSgx/9HKNxsju4mwflS6ENEqyTNTMhbp2c0N2t+Z9//mDoe1rxDsp+tt3VXshhPyrX+h6E9LvqD5KS/ew23P95PcKjUV/xAdgNzBh6eGY2QAAAABJRU5ErkJggg=="
            contain="true"
            alt="("
            className="h-[25px] sm:h-[40px]"
          />
          <div className="w-[88px] sm:w-[185px]">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAVCAYAAACNDipWAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQTSURBVHgBvVoteJMxED5WnplhMMVgNgGmE2A2vRrMphDMD915ECA2DGYKgwFTDGYzM63BDDNEi5jpDGYzqKoZ8j5NtvR6116+L+F9nqPfT75c8t7lcjlGZMemkxUqhxWvoyTWnDyisiitowhPbSfHTvaoHA68jnUqg6aTrpdSjhp4OqBy6Hgdu5bGS2TDjv9tUxmA/GDYbSoD9L/ipdQ8NpmukjpalsYWA4P8VX+NQZdYYevsugQ5W9H1BpVB3G8JJ4q5wfXCrcBiYB7vS5ATk48JrFFecMdco/xO9L95MumwGJh3ktsz4/BcSgcnv0SiwnkqEYlaC3TOYJGBJfJzh2mpr9zev2nUm1tHTieSQvJCJ7pPk3ClEdpUnr8ifZO/dtJjz9pz+pJ0Y9DI2MfKN30nV6x9m/TJthS9WiYKvT2a1t8kPbI0Fd3bpM9b4mmddF6158iqL5V3/XvunyO6S6JyYSe6xgQ/U16cOTmM7kF8h/ICvMQGeEP5I8trmnbUY8qL0VKBTrvs/jqzDqyqb+wZDH5F+TByMmTPupl1SP11KR/A00mDJssbngrvfEDVAUMe0mzYAc79+9WaOgZO3jv5w57fODnx13X3Vjgj5sG3h79OftJkDnUqVej3o5NT4d3QC8JxHZ7goG+dDBqR0joEYeLvaJb4GJe+HQb/kNKBMP+J9H0ZqENQcNDTOW2gu++vq/AUHPSC5o8DPFU9Lk45aIO9BDkwxBOyEYROvtKE/Btj+0CglSBMGPvfWUL7VIIsDhoDPKVGPYuDBoz9mPD71Mmy4RvRQRtCQ0wSyddzWozvXlIBgpB8WQyAZGdAaQgEIdlbNrRFgmZxUP7dbycvDG2x6r9QOrDSMS6LLcDTOX+onYOtq8tUD1VgPSNWzfCthYY653pr3bxO9m0t+ohjkQyMCVsHZKqHCkj5r8eqVa2thLZVDWB18KpOhAhndXCx/CoZWFtZI+V5CpEBGqHS/iRV0yxoKf1LR50qTqQ5t3aUqqJD41bSIZZfrQZGgrDvf7kRqoRpriMkUqgsSWfm1BUmkY99fN/r4c5aZYVJ5GPsKF4g2eFG2KD02jSfN7g/8jq6ljHxJAsDiCtCITP74e8v/HWcPYLIoW9rAYwbezOI/0B3pEtn5seUlszBUeIEDsTj7DkmPZMfk5CkzMFeNL5wtg3OiUSVn5mR7P0iO08Y/8vo/vZs6++HXsezaBz4xdxuE8YlodMAfNyh2QwWA+QepNVbJcQrHhEBK4p7e4+mVxocL2WvD/MIkUEqlXaZ7pRI1IzGEyIDP8YF3TFPKTrivffY6+A8jbyOUFxaeDQMRX7rfhFqwKnkd8h+RoUO05+nRECUwDwsIbHp2+5QGnbJPi7oSOUpfGPdOsR6/D+vBt6wuIDM0QAAAABJRU5ErkJggg=="
              contain="true"
              alt="*"
              className="h-[6px] sm:h-[10px] mx-auto mb-1"
            />
            <p className="text-[6px] sm:text-[13px] text-center">
              Trusted by millions worldwide. Sice 2015.{" "}
            </p>
          </div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAABQCAYAAAAKlxWDAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUbSURBVHgBvVotdBtHEP6c5hVUJiUyKZFIAyLSAouU2LjGMSpwSpvS2tivNC2tjWvskJKWlCikAQoKiE0KLJIQh4TkPt9MbjSavds96eV7b5/vVnf77czO3+4Z+MT4DJvHoGoPqrZVtVv/431sDiQ6kMbrJ9FDmyIcVu20ajumbxE9eA+bgSd7jUCdpYSDRP+BIyOuE89mE0YqU3wf9P2JNQn3qzau2k+ufxxMgmQ3WJNwT/5OpCm8mi/RIh2RY6UksFI8qtpcrofyl/cXpn8twmEwAUp2KwSHSFhkX8JosLGQLdxE9twEz1G7SBHh647fSXAsk7CYRe/mGA2lmCcmoe4yDt47D/paCa2hXJhrkquaU76ZdI0U4b4MNjAkl3J9bp5JkSVdI5Wefq7aV9L+lb7/UEs2k3uu27Z5h5P6vWp/owVbQR/X5czc/5YYZEee5SRukOka9xIDWRwiBkkoVTIzRIjcYhjcTxBHEfaP0Kx1a1hLEV6hexLTqh1hWRv/IAMRoaoolf8OEau5Uzoi5Rb+ZQ1h+wkySpdMSTmE9Lm5IdPrR8GzC2RK10ZI0B04a3WJyNGp/hNkSkfoGjKqvMTyTBcymPrqVP5ycBrWc3Q4eQQdjEQ0Eo0W2TPuS3hp+igZi9g2Z6b/7cr1GQqgKrVuoPntJEHEQkrXcoZCqNEsgoEnro/u4NPRc/QkjGa6a66HiP3vJXoScg29oYzMdbQxyXb2iJBr+CtiQ9HgbVHk7BEh4Z1YyafunWJnt7ifGIzrpYY0EnL+RjUWO3spBtggWNNwfcLtseB90Md3HlftFQqyPYToVAagulp3PqjrzyM0RnSAQnAN38k1y/SHqEPVLEFmS8ciyRS0UiuRhjVvmez/Bcvr2bUFSBJG4emJG9xv2Yio9skinGO1IiPZvrnfC959hp6EhGZ3i4fm2keaLuPqJNTs7tfT/rVkvcIaYSMNSX9ErUoWS9vuWb+tptopeXFOTGHHDOyjDYkoZVG2J9p2wD6IK+gyx2YyRSg9+uJ6HmENUELO8inqNdTyL3X8ER1zFRPeCpnWMQdoEqxPRd49iqONqtTXJlQdo42vY0bu/ho9CaOaBkI4SbxLzRT7Y05NYzcwdlJRdMomJLgeVKM3GD3qIhbSeOgwc8+cIgNbiX4t5XU7fSEEE6zu6e0GtTMhb2E9kOCxuWdobFXzOmfeUTU+7HppHUKGuOLQ5mMpMwUNh2rRyPMMsZp2g77OQOAlpGHQIBi+NOr8gdoqvTTDgKyzsPKEfOEyeI4lxjHaYUuOQS4hkI46lNgaybW5tnGXkj9FIkJFhJQytVnR70owv9uSg7/ppjVa4+TxJUmpooUMoinp86r9j9qY3qI+2rQZ5YeqfSvXXyJYnhLH1+PKlHH4Y09i5cS/5OvaDbr3HR7bnnBTX9eIUc5DXRJqIlaf0+ogOoXyauZzKxrpklB3wTvSqLapTOIMy2r0ew0/oXEOIcFT/JSR2G8W1pj8oYOe8QxyPjq/Qe0C0+A3usk3qKUh2QPpO0FDrvmS/S9yv3JfyaA0DF8m0k+5LWchRh/9C83aDbF8hHZV4ha64eEgYzSnG7do1s9nC58vB32+cmtdk7OJWfHNTfphhC/c/VUfCS003BFd+fBOK30ItZaJSgx/9HKNxsju4mwflS6ENEqyTNTMhbp2c0N2t+Z9//mDoe1rxDsp+tt3VXshhPyrX+h6E9LvqD5KS/ew23P95PcKjUV/xAdgNzBh6eGY2QAAAABJRU5ErkJggg=="
            contain="true"
            alt=")"
            className="h-[25px] sm:h-[40px] -scale-x-[1]"
          />
        </div>
      </div>
      <h1 className="text-7xl font-[700] tracking-tight text-slate-700 text-center mx-auto mb-8 sm:mb-10 max-w-[400px] md:max-w-[1088px]  ">
        The most reputable, friendly, and secure crypto wallet.
      </h1>
      {!currentWallet && (
        <div className="flex items-center justify-center">
          <div>
            <button
              className="block bg-blue-700 rounded-[20px] text-2xl text-white font-bold hoverOpacity px-8 py-5 hover:bg-blue-500 "
              onClick={() => navigate("/wallet/create")}
            >
              Create a new wallet
            </button>
            <p className="text-center mt-3">
              or
              <a
                href="/wallet/access"
                className="underline hoverOpacity text-base text-slate-700 ml-2 font-semibold tracking-wide"
              >
                Access my wallet
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
